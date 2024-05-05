export class FacultyModel {
	constructor(
		name,
		department = null,
		designation,
		experience,
		qualification,
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






