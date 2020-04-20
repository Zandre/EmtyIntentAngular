import { SelectItem } from '../lists/select-item';
import { LightSaberColor } from './../enums/light-saber-color-enum';
//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export class LightSaberColorList {

	static lightSaberColors: SelectItem<LightSaberColor>[] = [
		{ value: LightSaberColor.Blue, description: 'Blue', optionGroup: 'Default' },
		{ value: LightSaberColor.Green, description: 'Green', optionGroup: 'Default' },
		{ value: LightSaberColor.Purple, description: 'Purple', optionGroup: 'Default' },
		{ value: LightSaberColor.Red, description: 'Red', optionGroup: 'Default' },
	];

	static getDescription(value: LightSaberColor): string
    {
        return value ? LightSaberColorList.lightSaberColors.find(x => x.value === value).description : null;
    }
}
