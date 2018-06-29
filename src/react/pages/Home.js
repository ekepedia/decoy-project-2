import React from "react";

import Feature  from "../components/cards/Feature";
import Category from "../components/cards/Category";
import Event    from "../components/cards/Event";
import SubNav   from "../components/SubNav";
import Simple   from "../components/cards/Simple";

export default class Home extends React.Component {

    render() {
        return (
            <div className="page">
                <section style={{marginBottom:"40px"}}>
                    <h1>Trending Now</h1>
                    <Feature/>
                    <Feature/>
                    <Feature/>
                </section>
                <section style={{marginBottom:"40px"}}>
                    <h1>Popular Categories</h1>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                    <Category/>
                </section>
                <section style={{marginBottom:"40px"}}>
                    <h1>NFL Preseason</h1>
                    <p className="home-text">
                        Exhibition games have been played in professional football since the beginning of the sport. In fact, until league play was formalized in 1920, one could consider virtually all of an independent professional football team's schedule to be exhibitions (as in test matches). In the early years of the sport, teams often "barnstormed", and played squads from leagues outside their own, or against local college teams or other amateur groups, charging fans whatever the traffic would bear.

                        When the NFL was founded in 1920, there were no such things as exhibition games, and all games counted in the standings and would be used to determine the league champion. In 1921 this was revised to only count games involving two league members, thus allowing non-league exhibitions but still effectively disallowing exhibitions between two league teams. This rule had a direct impact on deciding the 1921 championship, in which the losing team had insisted, both before and after, that the game only be considered an exhibition. In 1924, the league again changed the rule to declare games held in December or later to be exhibitions. By the mid-1930s, teams prepared for a standard 12-game regular season schedule, although even as late as 1939 teams would schedule non-league exhibition games both before and during the season (during bye weeks). The Pittsburgh Steelers (then known as the Pirates) were well known for playing both in the NFL and on a limited schedule in the decades-old Western Pennsylvania circuit in the 1930s.

                        In the 1960s, teams began playing 14 regular season games, and there was a corresponding decrease in the length of the preseason. Teams played four or five preseason games each year. (For example, in 1966 each of the nine American Football League teams each played precisely four preseason games.) By the end of the decade, however, there would be a rapid increase in the number of preseason games, quickly reaching 1950s levels.</p>
                </section>
            </div>
        );
    }
}
