const si = require('systeminformation');

const getStatus = () => {
	return Promise.all([si.currentLoad(), si.mem()])
	.then(([load, mem]) => {
		const cpu = (load.currentLoad).toFixed(1);
		const totalMem = (mem.total / 1024 / 1024 / 1024).toFixed(2);
		const usedMem = ((mem.active / 1024 / 1024 / 1024)- 0.3).toFixed(2);
		return {cpu, usedMem, totalMem};
	});
};

module.exports = {getStatus};
