export default class CurriculumVitaeService {
    static data = null;

    getData() {
        if(CurriculumVitaeService.data == null) {
			return fetch('demo/data/profile.json').then(res => res.json()).then(d => {
				CurriculumVitaeService.data = d;
				return CurriculumVitaeService.data;
			});
		} else {
			return Promise.resolve(CurriculumVitaeService.data);
		}
    }
}