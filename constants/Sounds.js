import Boss1 from '../assets/sounds/Boss-1-is-about-to-spawn.mp3';
import Boss2 from '../assets/sounds/Boss-2-is-about-to-spawn.mp3';
import Boss3 from '../assets/sounds/Boss-3-is-about-to-spawn.mp3';
import Boss4 from './../assets/sounds/Boss%204%20is%20about%20to%20spawn.mp3';
import Boss5 from './../assets/sounds/Boss-5-is-about-to-spawn.mp3';
import Boss6 from './../assets/sounds/Boss-6-is-about-to-spawn.mp3';
import Boss7 from '../assets/sounds/Boss-7-is-about-to-spawn.mp3';
import Boss8 from '../assets/sounds/Boss-8-is-about-to-spawn.mp3';
import DefaultMessage from './../assets/sounds/15%20seconds%20to%20spawn%20a%20boss.mp3';

export  const Sounds = (nameSound =  null)=>{
        if (nameSound === 'Boss1') {
                return Boss1;
        } else if (nameSound === 'Boss2') {
                return Boss2;
        } else if (nameSound === 'Boss3') {
                return Boss3;
        } else if (nameSound === 'Boss4') {
                return Boss4;
        } else if (nameSound === 'Boss5') {
                return Boss5;
        } else if (nameSound === 'Boss6') {
                return Boss6;
        } else if (nameSound === 'Boss7') {
                return Boss7;
        } else if (nameSound === 'Boss8') {
                return Boss8;
        } else {
                return DefaultMessage;
        }
};
