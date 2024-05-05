export class FacultyModel {
	constructor(
		name,
		designation,
		qualification,
		experience,
		department = null,
		image_url,
	) {
		this.name = name;
		this.department = department;
		this.designation = designation;
		this.qualification = qualification;
		this.experience = experience;
		this.image_url = image_url;
	}
}






