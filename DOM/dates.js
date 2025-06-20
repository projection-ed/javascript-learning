let date = new Date()
console.log(date);
let date2 = new Date("Mar, 02 2025")
console.log(date2);
let date3 = new Date()
console.log(date3.toUTCString());
console.log(date3.toISOString());

// date3.setDate(28)
// date3.setMonth(1)
console.log(date3.getDate());
date3.setMonth(date3.getMonth() + 1)
date3.setDate(date3.getDate() - 2)
console.log(date3.toISOString());
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 6));
console.log(Math.ceil(30.4));

You have a nested dataset of job applicants. Each applicant has multiple profiles for different job roles, and each profile includes skills, experience, and past projects.

Your task:
Extract a new object containing:

Only those candidates who:

Have 3+ years experience in a profile

Know both Python and AWS

Return a new object with:

python
Copy
Edit
{
  "shortlisted": [
    {
      "name": "Candidate Name",
      "email": "example@email.com",
      "matched_profiles": [
        {
          "role": "DevOps Engineer",
          "experience": 4,
          "skills": ["Python", "AWS", "Docker"]
        },
        ...
      ]
    },
    ...
  ]
}

candidates = [
    {
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "profiles": [
            {"role": "Backend Developer", "experience": 2, "skills": ["Python", "Django", "MySQL"]},
            {"role": "DevOps Engineer", "experience": 4, "skills": ["Python", "AWS", "Docker"]}
        ]
    },
    {
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
        "profiles": [
            {"role": "Cloud Engineer", "experience": 5, "skills": ["AWS", "Terraform", "Bash"]},
            {"role": "System Admin", "experience": 3, "skills": ["Linux", "Ansible", "AWS"]}
        ]
    },
    {
        "name": "Charlie Nguyen",
        "email": "charlie.nguyen@example.com",
        "profiles": [
            {"role": "Software Engineer", "experience": 3, "skills": ["Python", "AWS", "Flask"]},
            {"role": "Data Analyst", "experience": 2, "skills": ["SQL", "Excel"]}
        ]
    },
    {
        "name": "Dana Patel",
        "email": "dana.patel@example.com",
        "profiles": [
            {"role": "Frontend Developer", "experience": 4, "skills": ["React", "TypeScript", "CSS"]},
            {"role": "Full Stack Developer", "experience": 5, "skills": ["Python", "React", "AWS"]}
        ]
    },
    {
        "name": "Ethan Brown",
        "email": "ethan.brown@example.com",
        "profiles": [
            {"role": "Data Scientist", "experience": 6, "skills": ["Python", "Pandas", "AWS", "ML"]},
            {"role": "ML Engineer", "experience": 4, "skills": ["Python", "TensorFlow", "GCP"]}
        ]
    },
    {
        "name": "Fatima Ali",
        "email": "fatima.ali@example.com",
        "profiles": [
            {"role": "Network Engineer", "experience": 5, "skills": ["Cisco", "Networking", "AWS"]},
            {"role": "DevOps Engineer", "experience": 2, "skills": ["Python", "Linux"]}
        ]
    },
    {
        "name": "George Lee",
        "email": "george.lee@example.com",
        "profiles": [
            {"role": "Cloud Architect", "experience": 7, "skills": ["AWS", "Python", "Kubernetes"]},
            {"role": "Backend Developer", "experience": 3, "skills": ["Node.js", "MongoDB", "Express"]}
        ]
    },
    {
        "name": "Hannah Kim",
        "email": "hannah.kim@example.com",
        "profiles": [
            {"role": "Full Stack Developer", "experience": 3, "skills": ["Django", "Vue.js", "AWS"]},
            {"role": "Data Engineer", "experience": 4, "skills": ["Python", "AWS", "Spark"]}
        ]
    },
    {
        "name": "Isaac Clarke",
        "email": "isaac.clarke@example.com",
        "profiles": [
            {"role": "Security Analyst", "experience": 4, "skills": ["Python", "AWS", "Security"]},
            {"role": "DevSecOps Engineer", "experience": 3, "skills": ["Docker", "Kubernetes", "Python"]}
        ]
    },
    {
        "name": "Julia White",
        "email": "julia.white@example.com",
        "profiles": [
            {"role": "AI Researcher", "experience": 5, "skills": ["Python", "PyTorch", "AWS"]},
            {"role": "Data Scientist", "experience": 4, "skills": ["Python", "AWS", "Scikit-learn"]}
        ]
    }
]




