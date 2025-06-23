export default class ProfileService {
    static data = null;

    getData() {
        if(ProfileService.data == null) {
			return fetch('./../../public/demo/data/profile.json').then(res => res.json()).then(d => {
				ProfileService.data = d;
				return [...ProfileService.data];
			});
		} else {
			return Promise.resolve([...ProfileService.data]);
		}
    }
}