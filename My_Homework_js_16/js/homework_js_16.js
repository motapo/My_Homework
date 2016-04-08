	var human = {
		name: 'Igor ',
		age: 23,
		gender: 'male',
		growth: 176,
		theWeight: 78
	};

	var Worker = {};
	var Student = {};

	function work() {
	Worker.work = 'programmer',
	Worker.wages = '1500$'
	Worker.__proto__= human;
	} 
	work();

 	function Study() {
	Student.university = 'ZNU';
	Student.scholarship = '50$'
	Student.__proto__= human;
	}
	Study();

	console.log(Worker);
	console.log(Worker.age);
	console.log(Worker.work);

	var newWorker = {};
	newWorker.__proto__= Worker;

	console.log(newWorker);
	console.log(newWorker.wages);
	console.log(newWorker.work);
	console.log(newWorker.name);

