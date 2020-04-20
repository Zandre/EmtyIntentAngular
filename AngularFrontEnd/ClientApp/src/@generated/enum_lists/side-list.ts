import { SelectItem } from '../lists/select-item';
import { Side } from './../enums/side-enum';
//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export class SideList {

	static sides: SelectItem<Side>[] = [
		{ value: Side.Dark, description: 'Dark', optionGroup: 'Default' },
		{ value: Side.Light, description: 'Light', optionGroup: 'Default' },
	];

	static getDescription(value: Side): string
    {
        return value ? SideList.sides.find(x => x.value === value).description : null;
    }
}
