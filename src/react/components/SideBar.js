import React, { Component } from 'react';
import injectSheet from 'react-jss'

const personIcon = '/img/icons/person.png';
const starIcon = '/img/icons/star.png';
const arrowLeft = 'plutus/img/arrow_left.png';
const arrowRight = 'plutus/img/arrow_right.png';
const itemsIcon = '/img/icons/slip.png';
import WithCenteredLabel from './WithCentreredLabel';

const Styles = {
    container: {
        position: 'fixed',
        right: 0,
        height: '100%',
        zIndex: 149,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',

    },
    accordian: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: 16,
        transition: '0.4s',
        cursor: 'pointer',
    },
    arrowIconContainer: {
        flex: 1,
    },
    arrowIcon: {
        width: 56,
        height: 56,
    },
    personIconContainer: {
        flex: 2,
    },
    personIcon: {
        width: 32,
    },
    favoritesIconContainer: {
        flex: 2,
    },
    favoritesIcon: {
        width: 32,
    },
    itemIconContainer: {
        flex: 6,
    },
    itemsIcon: {
        width: 32,
    },
    activePositionCountContainer: {
        width: 22,
        height: 22,
        fontSize: 14,
        position: 'relative',
        bottom: 12,
        left: 20,
        textAlign: 'center',
        borderRadius: '50%',
        backgroundColor: 'red',
        color: 'white',
    },
    activePositionCount: {
        paddingTop: 1,
    },
    panel: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 0,
        paddingRight: "10px",
        transition: 'max-width 0.15s ease-out',
    },
    settingsSection: {
        flex: 1,
    },
    statusSection: {
        flex: 2,
        paddingLeft: 16,
        paddingRight: 16,
    },
    nameHeader: {
        fontSize: 24,
    },
    accountInfoLabel: {
        fontSize: 12
    },
    statusBlock: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 24,
    },
    favoritesSection: {
        flex: 2,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    // Active Positions
    activePositionsSection: {
        flex: 6,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    activePositionsList: {
        display: 'flex',
        flexDirection: 'column',
    },
    activePosition: {
        marginBottom: 8,
    },
    positionSide: {
        fontSize: 12,
        color: '#F4A460',
    },
    positionHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    positionOdds: {
        marginLeft: 4,
        fontSize: 10,
        color: 'grey',
    },
    positionEventName: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 12,
    },
    positionTimeTo: {
        marginLeft: 4,
    },
    positionPayouts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lockInButton: {
        marginTop: 4,
        border: '1px solid red',
        textAlign: 'center',
        padding: '4px',
        fontSize: 12,
    }
};

class PersistentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    _togglePanel(e) {
        const panel = document.getElementById("hidden-panel");
        const expansionWidth = 256;
        if (panel.style.maxWidth === '0px'){
            panel.style.maxWidth = expansionWidth + 'px';
            this.setState({ expanded: true});
        } else {
            panel.style.maxWidth = '0px';
            this.setState({ expanded: false});
        }
    }

    _renderWatchList() {
        const { classes } = this.props;
        let watchList = [];
        // todo: replace this w graphql logic?
        const watchListMockData = [
            "Yankees vs. Redsox",
            "Giants vs. Eagles",
            "Squid vs. Humpback",
        ];
        watchList = watchListMockData.map((item) => {
            return <div>{item}</div>
        });
        return (
            <div className={classes.watchListItems}>
                {watchList}
            </div>
        )
    }

    _renderActivePositions() {
        const { classes } = this.props;
        let activePositions = [];
        const activePositionsMockData = [
            {
                side: 'Against',
                team: 'Cleveland Browns',
                eventName: 'Cleveland Browns at Indianapolis Colts',
                odds: '1.20',
                stake: '$23.12',
                payout: '$34.01',
                timeTo: 'live'
            },
            {
                side: 'Against',
                team: 'San Francisco 49ers',
                eventName: 'Washington Redskins at San Franciso 49ers',
                odds: '1.63',
                stake: '$101.34',
                payout: '$78.11',
                timeTo: 'live'
            },
            {
                side: 'For',
                team: 'Green Bay Packers',
                eventName: 'Green Bay Packers at Pittsburgh Steelers',
                odds: '0.94',
                stake: '$15.12',
                payout: '$9.41',
                liability: '$25.98',
                timeTo: '3h'
            },
        ];

        activePositions = activePositionsMockData.map((pos) => {
            const timeTo = pos.timeTo === 'live' ? '●' : pos.timeTo;

            return (
                <div className={classes.activePosition}>
                    <div className={classes.positionSide}>
                        {pos.side}
                    </div>
                    <div className={classes.positionHeaderContainer}>
                        {pos.team}
                        <div className={classes.positionOdds}>
                            {pos.odds}
                        </div>
                    </div>
                    <div className={classes.positionEventName}>
                        {pos.eventName}
                        <div className={classes.positionTimeTo}>
                            {timeTo}
                        </div>
                    </div>
                    <div className={classes.positionPayouts}>
                        <WithCenteredLabel label="Stake" className={classes.positionStake}>
                            {pos.stake}
                        </WithCenteredLabel>
                        <WithCenteredLabel label="Payout" className={classes.positionStake}>
                            {pos.payout}
                        </WithCenteredLabel>
                        <WithCenteredLabel label="Liability" className={classes.positionStake}>
                            {pos.liability || "$--"}
                        </WithCenteredLabel>
                    </div>
                </div>
            )
        });

        return (
            <div className={classes.activePositionsList}>
                {activePositions}
            </div>
        )
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        const arrowIcon = expanded ? arrowLeft : arrowRight;
        return (
            <div className={classes.container}>
                <div className={classes.accordian} onClick={(e) => this._togglePanel(e)}>
                    <div className={classes.arrowIconContainer}>
                        <img className={classes.arrowIcon} src={arrowIcon} alt="My logo" />
                    </div>
                    <div className={classes.personIconContainer}>
                        <img className={classes.personIcon} src={personIcon} alt="My logo" />
                    </div>
                    <div className={classes.favoritesIconContainer}>
                        <img className={classes.favoritesIcon} src={starIcon} alt="My logo" />
                    </div>
                    <div className={classes.itemIconContainer}>
                        <img className={classes.itemsIcon} src={itemsIcon} alt="My logo" />
                        <div className={classes.activePositionCountContainer}>
                            <div className={classes.activePositionCount}>
                                3
                            </div>
                        </div>
                    </div>
                </div>
                <div id="hidden-panel" className={classes.panel}>
                    <div className={classes.settingsSection}>

                    </div>
                    <div className={classes.statusSection}>
                        <div className={classes.nameHeader}> Eke Wokocha </div>
                        <WithCenteredLabel label="Current stake" className={classes.statusBlock} labelStyle={Styles.accountInfoLabel}>
                            $132
                        </WithCenteredLabel>
                        <WithCenteredLabel label="Current payout" className={classes.statusBlock} labelStyle={Styles.accountInfoLabel}>
                            $414
                        </WithCenteredLabel>
                    </div>
                    <div className={classes.favoritesSection}>
                        <div className={classes.nameHeader}> My Watch List </div>
                        {this._renderWatchList()}
                        <button className={classes.seeMoreFavoritesButton}>
                            See more
                        </button>
                    </div>
                    <div className={classes.activePositionsSection}>
                        <div className={classes.nameHeader}> Active Positions </div>
                        {this._renderActivePositions()}
                    </div>
                </div>
            </div>
        )
    }
}

export default injectSheet(Styles)(PersistentDashboard);
