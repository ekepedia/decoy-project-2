import dispatcher from "../dispatcher";
import toastr from "toastr";

export function submitLoginCredentials({email, password}) {

    if (!email || !password)
        return;

    dispatcher.dispatch({
        type: "SUBMIT_LOGIN_CREDENTIALS",
        email,
        password
    });
}

export function submitAdminLoginCredentials({password}) {

    if (!password)
        return;

    dispatcher.dispatch({
        type: "SUBMIT_ADMIN_LOGIN_CREDENTIALS",
        password
    });
}

export function saveProfile(profile) {

    const {mls_id} = profile;

    if (!mls_id)
        return;

    dispatcher.dispatch({
        type: "SAVE_PROFILE",
        profile
    });
}

export function uploadProfileImage({name, file, mls_id}) {

    if (!mls_id || !name || !file)
        return;

    dispatcher.dispatch({
        type: "UPLOAD_PROFILE_PHOTO",
        name,
        file,
        mls_id
    });
}

export function uploadProfileVideo({name, file, mls_id}) {

    if (!mls_id || !name || !file)
        return;

    dispatcher.dispatch({
        type: "UPLOAD_PROFILE_VIDEO",
        name,
        file,
        mls_id
    });
}

export function submitSignUpCredentials({agent_name, mls_id, company_name, phone, email, password}) {

    if (!agent_name || !mls_id || !email || !password) {
        return toastr.error("All fields are required");

    }

    dispatcher.dispatch({
        type: "SUBMIT_SIGN_UP_CREDENTIALS",
        agent_name, mls_id, company_name, phone, email, password
    });
}

export function logout() {

    dispatcher.dispatch({
        type: "LOGOUT",
    });
}

export function changePassword({email, old_password, new_password, new_password_2}) {

    if (!old_password || !new_password || !new_password_2)
        return;

    if (new_password !== new_password_2)
        return toastr.error("Passwords did not match!");

    dispatcher.dispatch({
        type: "CHANGE_PASSWORD",
        email,
        old_password,
        new_password,
    });
}

export function submitReset({ email}) {

    if (!email) {
        return toastr.error("Email field required");
    }

    dispatcher.dispatch({
        type: "SUBMIT_RESET",
        email
    });
}