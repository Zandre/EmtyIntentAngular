import { SelectItem } from '../lists/select-item';
import { Speciality } from './../enums/speciality-enum';
//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export class SpecialityList {

	static specialities: SelectItem<Speciality>[] = [
		{ value: Speciality.ForceLightning, description: 'ForceLightning', optionGroup: 'Default' },
		{ value: Speciality.LightSaber, description: 'LightSaber', optionGroup: 'Default' },
		{ value: Speciality.Prophesy, description: 'Prophesy', optionGroup: 'Default' },
	];

	static getDescription(value: Speciality): string
    {
        return value ? SpecialityList.specialities.find(x => x.value === value).description : null;
    }
}
