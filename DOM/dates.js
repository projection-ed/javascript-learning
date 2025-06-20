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

Excellent! Let’s create a **more complex, real-world-style problem** involving nested data, multi-step transformation, filtering, grouping, and aggregation — **perfect for map, filter, reduce, and possibly even chaining them**.

---

## 🔧 Complex Real-World Problem: **Project Allocation Insights**

### 📘 Scenario

You work in HR analytics at a consulting firm. Each **employee** has worked on multiple **projects**. You need to:

> 🔎 **Identify employees who:**
>
> 1. Have worked on **3 or more projects** in the **last 2 years** (from today: June 2025).
> 2. On those projects, they must have used both **Python** and **AWS** at least once.
> 3. From that filtered data, generate a new object per employee that contains:
>
>    * `name`, `email`
>    * `total_projects_last_2_years`
>    * `matching_projects`: List of project names with both "Python" & "AWS"
>    * `tech_stack`: Union of all technologies used across matching projects

---

### 🧾 Sample Nested Input (3 employees)

```python
from datetime import date

employees = [
    {
        "name": "Alice Johnson",
        "email": "alice.j@example.com",
        "projects": [
            {"name": "Inventory System", "year": 2024, "tech": ["Python", "Django", "AWS"]},
            {"name": "CI/CD Pipeline", "year": 2023, "tech": ["Python", "AWS", "Docker"]},
            {"name": "ML API", "year": 2024, "tech": ["Python", "Flask", "AWS", "Pandas"]},
            {"name": "Old CRM", "year": 2021, "tech": ["PHP", "MySQL"]}
        ]
    },
    {
        "name": "Bob Smith",
        "email": "bob.s@example.com",
        "projects": [
            {"name": "Cloud Migration", "year": 2023, "tech": ["AWS", "Terraform"]},
            {"name": "Legacy App Support", "year": 2023, "tech": ["Java", "Spring"]},
            {"name": "Log Analytics", "year": 2022, "tech": ["Python", "AWS", "Kibana"]}
        ]
    },
    {
        "name": "Charlie Kim",
        "email": "charlie.k@example.com",
        "projects": [
            {"name": "Realtime Dashboard", "year": 2025, "tech": ["React", "Node.js"]},
            {"name": "ML Engine", "year": 2023, "tech": ["Python", "Scikit-learn", "AWS"]},
            {"name": "Data Collector", "year": 2024, "tech": ["Python", "Kafka", "AWS"]},
            {"name": "Reporting Tool", "year": 2025, "tech": ["Python", "AWS", "Plotly"]},
        ]
    }
]
```

---

### ✅ Your Output Should Be Like:

```python
[
    {
        "name": "Alice Johnson",
        "email": "alice.j@example.com",
        "total_projects_last_2_years": 3,
        "matching_projects": ["Inventory System", "CI/CD Pipeline", "ML API"],
        "tech_stack": ["Python", "Django", "AWS", "Docker", "Flask", "Pandas"]
    },
    {
        "name": "Charlie Kim",
        "email": "charlie.k@example.com",
        "total_projects_last_2_years": 4,
        "matching_projects": ["ML Engine", "Data Collector", "Reporting Tool"],
        "tech_stack": ["Python", "Scikit-learn", "AWS", "Kafka", "Plotly"]
    }
]
```

---

### 💡 Hints to Solve:

* Step 1: Filter projects by `year >= 2023`
* Step 2: Keep only employees with **3 or more such projects**
* Step 3: From those, pick projects with **both Python & AWS**
* Step 4: Map into a new object with fields:

  * name, email
  * count of total recent projects
  * project names matching Python & AWS
  * merged tech stack (unique only)

---

Would you like me to:

* **Write full code** for this solution?
* Increase complexity by grouping by department, calculating billing hours, etc.?
  Let me know how deep you'd like to go!



