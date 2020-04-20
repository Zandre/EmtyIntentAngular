import { LightSaberColor } from './../enums/light-saber-color-enum';
import { Side } from './../enums/side-enum';
import { Speciality } from './../enums/speciality-enum';


//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export interface CreateForceUser {
    name: string;
    side: Side;
    speciality: Speciality;
    lightSaberColor: LightSaberColor;
}
