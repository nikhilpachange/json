const jobs = [
    {
        title: "Software Engineer",
        company: "Company A",
        location: "New York"
    },
    {
        title: "Data Scientist",
        company: "Company B",
        location: "San Francisco"
    }
];

const jobsDiv = document.getElementById('jobs');
jobs.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.className = 'job';
    jobDiv.innerHTML = `<h3>${job.title}</h3><p>${job.company} - ${job.location}</p>`;
    jobsDiv.appendChild(jobDiv);
});
