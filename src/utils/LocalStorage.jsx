const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Complete project report",
        "description": "Finish the final report for the project.",
        "date": "2024-10-15",
        "category": "Reporting",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": true
      },
      {
        "title": "Update client presentation",
        "description": "Revise slides based on client feedback.",
        "date": "2024-10-18",
        "category": "Presentation",
        "active": true,
        "newtask": true,
        "failed": false,
        "completed": false
      },
      {
        "title": "Team meeting",
        "description": "Discuss project milestones with the team.",
        "date": "2024-10-20",
        "category": "Meeting",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Conduct market research",
        "description": "Gather data on industry trends.",
        "date": "2024-10-14",
        "category": "Research",
        "active": true,
        "newtask": true,
        "failed": false,
        "completed": true
      },
      {
        "title": "Prepare budget proposal",
        "description": "Draft the budget proposal for the upcoming quarter.",
        "date": "2024-10-22",
        "category": "Finance",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": false
      },
      {
        "title": "Client follow-up",
        "description": "Reach out to clients for feedback.",
        "date": "2024-10-17",
        "category": "Client Management",
        "active": true,
        "newtask": false,
        "failed": true,
        "completed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design new logo",
        "description": "Create a new logo for the product line.",
        "date": "2024-10-10",
        "category": "Design",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": true
      },
      {
        "title": "Website update",
        "description": "Update the website with new content.",
        "date": "2024-10-25",
        "category": "Web Development",
        "active": true,
        "newtask": true,
        "failed": false,
        "completed": false
      },
      {
        "title": "SEO analysis",
        "description": "Conduct an analysis of the website's SEO performance.",
        "date": "2024-10-19",
        "category": "Marketing",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Review employee performance",
        "description": "Conduct performance reviews for team members.",
        "date": "2024-10-12",
        "category": "HR",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": true
      },
      {
        "title": "Plan team-building event",
        "description": "Organize activities for the team-building day.",
        "date": "2024-10-30",
        "category": "Event Planning",
        "active": true,
        "newtask": true,
        "failed": false,
        "completed": false
      },
      {
        "title": "Update employee handbook",
        "description": "Revise the employee handbook with new policies.",
        "date": "2024-10-16",
        "category": "HR",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix software bugs",
        "description": "Address the critical bugs reported by users.",
        "date": "2024-10-13",
        "category": "Development",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": true
      },
      {
        "title": "Code review",
        "description": "Review the code submitted by junior developers.",
        "date": "2024-10-21",
        "category": "Development",
        "active": true,
        "newtask": false,
        "failed": false,
        "completed": false
      },
      {
        "title": "Implement new features",
        "description": "Add new features based on user feedback.",
        "date": "2024-10-28",
        "category": "Development",
        "active": true,
        "newtask": true,
        "failed": false,
        "completed": false
      }
    ]
  }
]



const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}
]


// export const setLocalStorage=()=>{
//  localStorage.setItem('employees',JSON.stringify(employees))
//  localStorage.setItem('admin',JSON.stringify(admin))
// }

// export const getLocalStorage=()=>{
//    const employee = JSON.parse(localStorage.getItem('employees'))
//    const admin = JSON.parse(localStorage.getItem('admin'))
//    console.log(employees,admin)
// }












export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify('employees'))
  localStorage.setItem('admin', JSON.stringify('admin'))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return{employees,admin}
  // console.log(employees, admin)
}



// export const getLocalStorage = () => {
//   try {
//     const employees = JSON.parse(localStorage.getItem({employees}));
//     const admin = JSON.parse(localStorage.getItem({admin}));
//     if (!employees || !admin) {
//       console.error("No data found in localStorage");
//     }
//     return { employees, admin };
//   } catch (error) {
//     console.log("Error parsing localStorage data: ", error);
//     return { employees: null, admin: null };
//   }
// }
