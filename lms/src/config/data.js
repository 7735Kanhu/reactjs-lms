export const CourseModel =[ {
    id: 1, // Unique identifier for the course
    name: 'Introduction to React Native',
    instructor: 'John Doe', // Name of the course instructor
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: "https://crowdbotics.ghost.io/content/images/2020/08/React-Native-Featured-Image.png", //Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
                {week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
                },
    
                {week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
                },// Additional weeks and topics...
                ],
    students: [
                {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
                },
                {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
                },
                // Additional enrolled students...
                ],
    },
    {
        id: 2, // Unique identifier for the course
        name: 'Introduction to React JS',
        instructor: 'Krick Doe', // Name of the course instructor
        description: 'Learn the basics of React JS development and build your first React app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
        thumbnail: "https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png", //Link to the course thumbnail
        duration: '6 weeks', // Duration of the course
        schedule: 'Monday and Thursdays, 4:00 PM - 6:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with HTML'],
        syllabus: [
                    {week: 1,
                    topic: 'Introduction to React',
                    content: 'Overview of React JS, setting up your development environment.'
                    },
        
                    {week: 2,
                    topic: 'Building Your First App',
                    content: 'Creating a simple Web app using React JS components.'
                    },// Additional weeks and topics...
                    ],
        students: [
                    {
                    id: 103,
                    name: 'Rock Johnson',
                    email: 'rock@example.com',
                    },
                    {
                    id: 104,
                    name: 'Pritam Smith',
                    email: 'pritam@example.com',
                    },
                    // Additional enrolled students...
                    ],
        },
        {
            id: 3, // Unique identifier for the course
            name: 'Programming with Python',
            instructor: 'Arun Das', // Name of the course instructor
            description: 'Learn the basics of Python Programming and build your first Program.',
            enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
            thumbnail: "https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png", //Link to the course thumbnail
            duration: '5 weeks', // Duration of the course
            schedule: 'Friday and Thursday, 5:00 PM - 7:00 PM',
            location: 'Online',
            prerequisites: ['Basic HTML knowledge', 'Familiarity with CSS'],
            syllabus: [
                        {week: 1,
                        topic: 'Introduction to Python',
                        content: 'Using Variables in Python, setting up your development environment.'
                        },
            
                        {week: 2,
                        topic: 'Principles of Object-oriented Programming (OOP)',
                        content: 'Creating a simple  program using Python.'
                        },// Additional weeks and topics...
                        ],
            students: [
                        {
                        id: 105,
                        name: 'Alice Singh',
                        email: 'alice@example.com',
                        },
                        {
                        id: 106,
                        name: 'Kartik Rao',
                        email: 'kartik@example.com',
                        },
                        // Additional enrolled students...
                        ],
            },
            {
                id: 4, // Unique identifier for the course
                name: 'Introduction to Java',
                instructor: 'John Doe', // Name of the course instructor
                description: 'Learn the basics of JAVA development and build your first mobile app.',
                enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
                thumbnail: "https://www.itechtics.com/wp-content/uploads/2022/05/Java-8-Offline-Installers.jpg", //Link to the course thumbnail
                duration: '8 weeks', // Duration of the course
                schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic JavaScript knowledge', 'Familiarity with Java'],
                syllabus: [
                            {week: 1,
                            topic: 'Introduction to Java',
                            content: 'Overview of Java, setting up your development environment.'
                            },
                
                            {week: 2,
                            topic: 'Building Your First App',
                            content: 'Creating a simple mobile app using Java components.'
                            },// Additional weeks and topics...
                            ],
                students: [
                            {
                            id: 101,
                            name: 'Alice Johnson',
                            email: 'alice@example.com',
                            },
                            {
                            id: 102,
                            name: 'Bob Smith',
                            email: 'bob@example.com',
                            },
                            // Additional enrolled students...
                            ],
                },
                {
                    id: 5, // Unique identifier for the course
                    name: 'Introduction to Django',
                    instructor: 'John Doe', // Name of the course instructor
                    description: 'Learn the basics of Django development and build your first web app.',
                    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
                    thumbnail: "https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-Django.jpg", //Link to the course thumbnail
                    duration: '8 weeks', // Duration of the course
                    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                    location: 'Online',
                    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with Python'],
                    syllabus: [
                                {week: 1,
                                topic: 'Introduction to Django',
                                content: 'Overview of Django, setting up your development environment.'
                                },
                    
                                {week: 2,
                                topic: 'Building Your First App',
                                content: 'Creating a simple mobile app using Django components.'
                                },// Additional weeks and topics...
                                ],
                    students: [
                                {
                                id: 101,
                                name: 'Alice Johnson',
                                email: 'alice@example.com',
                                },
                                {
                                id: 102,
                                name: 'Bob Smith',
                                email: 'bob@example.com',
                                },
                                // Additional enrolled students...
                                ],
                    },
                    {
                        id: 6, // Unique identifier for the course
                        name: 'Introduction to PHP',
                        instructor: 'John Doe', // Name of the course instructor
                        description: 'Learn the basics of PHP development and build your first web app.',
                        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
                        thumbnail: "https://images.unsplash.com/photo-1599507593362-50fa53ed1b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhwfGVufDB8fDB8fHww", //Link to the course thumbnail
                        duration: '4 weeks', // Duration of the course
                        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                        location: 'Online',
                        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with PHP'],
                        syllabus: [
                                    {week: 1,
                                    topic: 'Introduction to PHP',
                                    content: 'Overview of PHP, setting up your development environment.'
                                    },
                        
                                    {week: 2,
                                    topic: 'Building Your First App',
                                    content: 'Creating a simple web app using PHP components.'
                                    },// Additional weeks and topics...
                                    ],
                        students: [
                                    {
                                    id: 101,
                                    name: 'Alice Johnson',
                                    email: 'alice@example.com',
                                    },
                                    {
                                    id: 102,
                                    name: 'Bob Smith',
                                    email: 'bob@example.com',
                                    },
                                    // Additional enrolled students...
                                    ],
                        },
                        {
                            id: 7, // Unique identifier for the course
                            name: 'Introduction to JavaScript',
                            instructor: 'John Doe', // Name of the course instructor
                            description: 'Learn the basics of JavaScript development and build your first web app.',
                            enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
                            thumbnail: "https://astwellsoft.com/assets/images/blog/javascript.jpg", //Link to the course thumbnail
                            duration: '12 weeks', // Duration of the course
                            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                            location: 'Online',
                            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with HTML'],
                            syllabus: [
                                        {week: 1,
                                        topic: 'Introduction to JavaScript',
                                        content: 'Overview of JavaScripts, setting up your development environment.'
                                        },
                            
                                        {week: 2,
                                        topic: 'Building Your First App',
                                        content: 'Creating a simple web app using JavaScripts components.'
                                        },// Additional weeks and topics...
                                        ],
                            students: [
                                        {
                                        id: 101,
                                        name: 'Alice Johnson',
                                        email: 'alice@example.com',
                                        },
                                        {
                                        id: 102,
                                        name: 'Bob Smith',
                                        email: 'bob@example.com',
                                        },
                                        // Additional enrolled students...
                                        ],
                            }

]