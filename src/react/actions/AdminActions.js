import dispatcher from "../dispatcher";
import axios from "axios";
import toastr from "toastr";

export function searchAgent(fields, cb, silent) {

    cb = cb ? cb : function () {};

    let {mls_id} = fields;

    if (!mls_id)
        return;

    mls_id = mls_id.toUpperCase().trim();

    if (!silent)
        toastr.info(mls_id, 'Searching for agent');

    axios.get(`/api/agents?mls_id=${mls_id}`, fields)
        .then(function (response) {
            console.log(response.data);
            cb(null, response.data);

            if (response.data) {
                const {data} = response.data;

                if (data && data.agent) {
                    if (!silent)
                        toastr.success(data.agent.agent_name, 'Agent Found');
                } else {
                    toastr.error(mls_id, 'Agent Not Found');
                }
            } else {
                toastr.error(mls_id, 'Agent Not Found');
            }
        })
        .catch(function (error) {
            console.log(error);
            toastr.error(mls_id, 'Agent Not Found');
        });
}

export function saveProfile(profile, cb) {

    const {mls_id} = profile;

    if (!mls_id)
        return;

    toastr.info(mls_id, 'Updating for agent');

    axios.patch(`/api/agents`, profile).then((data) => {
        toastr.success("Profile updated!");
    }).catch((err) => {
        console.log(err);
        toastr.error("Error while uploading.");
    });

}

export function savePhoto(profile, cb) {

    cb = cb ? cb : function () {};

    toastr.info("Uploading Photo");

    const {photo_file, mls_id} = profile;

    let data = new FormData();

    data.append('file', photo_file);
    data.append('name', mls_id);
    data.append('mls_id', mls_id);

    axios.post(`/api/agents/image`, data).then((response) => {
        toastr.success("Photo uploaded!");
        cb(null);
    }).catch((err) => {
        console.log(err);
        toastr.error("Error while updating.");

        if(!err.response)
            return;

        const status = err.response.status;
        const {code} = err.response.data.error;

        toastr.error(status, code);

        cb(err);
    });

}

export function saveVideo(profile, cb) {

    cb = cb ? cb : function () {};

    toastr.info("Uploading Video");

    const {video_file, mls_id} = profile;

    let data = new FormData();

    data.append('file', video_file);
    data.append('name', mls_id);
    data.append('mls_id', mls_id);

    axios.post(`/api/agents/video`, data).then((response) => {
        toastr.success("Video uploaded!");
        cb(null);
    }).catch((err) => {
        console.log(err);
        toastr.error("Error while updating.");
        cb(err);
    });

}

