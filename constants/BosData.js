const timeGreenBosses = 1800;
const timeGoldBosses = 3600;
const ColorRandom =()=> '#'+Math.floor(Math.random()*16777215).toString(16);
export const BosstData = [
    // {
    //     name: "Boss 1",
    //     time : 22,
    //     sound : "Boss 1 is about to spawn.mp3",
    //     color: ColorRandom(),
    //     class: "boss1",
    //     position : {
    //         top: "3.5em",
    //         left: "37.5em",
    //         zIndex: "1",
    //         position: "absolute"
    //     }
    // },
    {
        name: "Boss 2",
        time : timeGreenBosses,
        sound : "Boss 2 is about to spawn.mp3",
        color: ColorRandom(),
        slug: "Boss2",
        position: {
            top: 190,
            left: 315,
            position: "absolute"
        }
    },
    {
        name: "Boss 3",
        time : timeGoldBosses,
        sound : "Boss 3 is about to spawn.mp3",
        color: ColorRandom(),
        slug: "Boss3",
        position: {
            top: 80,
            left: 328,
            position: "absolute"
        }
    },
    {
        name: "Boss 4",
        time : timeGreenBosses,
        sound : "Boss 4 is about to spawn.mp3",
        color: ColorRandom(),
        slug: "Boss4",
        position: {
            top: 63,
            left: 211,
            position: "absolute"
        }
    },
    {
        name: "Boss 5",
        time : timeGoldBosses,
        sound : "Boss 5 is about to spawn.mp3",
        color: ColorRandom(),
        slug: "Boss5",
        position: {
            top: 153,
            left: 124,
            position: "absolute"
        }
    },
    {
        name: "Boss 6",
        time : timeGreenBosses,
        sound : "Boss 6 is about to spawn.mp3",
        color: ColorRandom(),
        slug: "Boss6",
        position: {
            top: 145,
            left: 165,
            position: "absolute"
        }
    },
    {
        name: "Boss 7",
        time : timeGreenBosses,
        sound : "Boss 7 is about to spawn.mp3",
        color: ColorRandom(),
        slug: "Boss7",
        position: {
            top: 85,
            left: 135,
            position: "absolute"
        }
    },
    // {
    //     name: "Boss 8",
    //     time : 75,
    //     sound : "Boss 8 is about to spawn.mp3",
    //     color: ColorRandom(),
    //     class: "boss8",
    //     position: {
    //         top: "358px",
    //         left: "294px",
    //         zIndex: "1",
    //         position: "absolute"
    //     }
    // }
    ]
