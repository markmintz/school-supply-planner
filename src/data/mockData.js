// Mock data for the school supply planner application

// Supply items that can be needed for classes
export const supplyItems = [
  { id: 1, name: 'Pencils (Pack of 12)', category: 'Writing' },
  { id: 2, name: 'Colored Pencils (Pack of 24)', category: 'Art' },
  { id: 3, name: 'Scissors', category: 'General' },
  { id: 4, name: 'Glue Sticks (Pack of 4)', category: 'General' },
  { id: 5, name: 'Crayons (Pack of 64)', category: 'Art' },
  { id: 6, name: 'Notebook (Wide Ruled)', category: 'Writing' },
  { id: 7, name: 'Binders (1.5 inch)', category: 'Organization' },
  { id: 8, name: 'Folder with Pockets', category: 'Organization' },
  { id: 9, name: 'Highlighters (Pack of 4)', category: 'Writing' },
  { id: 10, name: 'Ruler (12 inch)', category: 'Math' },
  { id: 11, name: 'Calculator (Basic)', category: 'Math' },
  { id: 12, name: 'Textbook: Mathematics Grade 5', category: 'Books' },
  { id: 13, name: 'Textbook: Science Grade 5', category: 'Books' },
  { id: 14, name: 'Textbook: English Grade 5', category: 'Books' },
  { id: 15, name: 'Construction Paper', category: 'Art' },
  { id: 16, name: 'Markers (Pack of 12)', category: 'Art' },
  { id: 17, name: 'Erasers (Pink Pearl)', category: 'Writing' },
  { id: 18, name: 'Pencil Sharpener', category: 'General' },
  { id: 19, name: 'Backpack', category: 'General' },
  { id: 20, name: 'Lunch Box', category: 'General' }
];

// Classes with their required supplies
export const classes = [
  {
    id: 1,
    name: 'Mathematics 5A',
    teacher: 'Mrs. Johnson',
    grade: 5,
    subject: 'Mathematics',
    room: '201',
    requiredSupplies: [1, 6, 7, 8, 10, 11, 12, 17]
  },
  {
    id: 2,
    name: 'Science 5A',
    teacher: 'Mr. Smith',
    grade: 5,
    subject: 'Science',
    room: '105',
    requiredSupplies: [1, 6, 7, 8, 13, 17, 18]
  },
  {
    id: 3,
    name: 'English 5A',
    teacher: 'Ms. Davis',
    grade: 5,
    subject: 'English',
    room: '302',
    requiredSupplies: [1, 6, 7, 8, 9, 14, 17]
  },
  {
    id: 4,
    name: 'Art 5A',
    teacher: 'Mrs. Wilson',
    grade: 5,
    subject: 'Art',
    room: '110',
    requiredSupplies: [2, 3, 4, 5, 15, 16]
  },
  {
    id: 5,
    name: 'Mathematics 4A',
    teacher: 'Mr. Brown',
    grade: 4,
    subject: 'Mathematics',
    room: '205',
    requiredSupplies: [1, 6, 7, 8, 10, 17]
  },
  {
    id: 6,
    name: 'PE 5A',
    teacher: 'Coach Miller',
    grade: 5,
    subject: 'Physical Education',
    room: 'Gym',
    requiredSupplies: [19]
  }
];

// Users (teachers, students, parents)
export const users = [
  // Teachers
  {
    id: 1,
    name: 'Mrs. Johnson',
    email: 'johnson@school.edu',
    role: 'teacher',
    classIds: [1],
    avatar: null
  },
  {
    id: 2,
    name: 'Mr. Smith',
    email: 'smith@school.edu',
    role: 'teacher',
    classIds: [2],
    avatar: null
  },
  {
    id: 3,
    name: 'Ms. Davis',
    email: 'davis@school.edu',
    role: 'teacher',
    classIds: [3],
    avatar: null
  },
  {
    id: 4,
    name: 'Mrs. Wilson',
    email: 'wilson@school.edu',
    role: 'teacher',
    classIds: [4],
    avatar: null
  },
  {
    id: 5,
    name: 'Mr. Brown',
    email: 'brown@school.edu',
    role: 'teacher',
    classIds: [5],
    avatar: null
  },
  {
    id: 6,
    name: 'Coach Miller',
    email: 'miller@school.edu',
    role: 'teacher',
    classIds: [6],
    avatar: null
  },
  // Students
  {
    id: 7,
    name: 'Emma Thompson',
    email: 'emma.thompson@student.school.edu',
    role: 'student',
    classIds: [1, 2, 3, 4, 6],
    grade: 5,
    parentIds: [13, 14],
    avatar: null
  },
  {
    id: 8,
    name: 'Jake Martinez',
    email: 'jake.martinez@student.school.edu',
    role: 'student',
    classIds: [1, 2, 3, 6],
    grade: 5,
    parentIds: [15],
    avatar: null
  },
  {
    id: 9,
    name: 'Sophia Chen',
    email: 'sophia.chen@student.school.edu',
    role: 'student',
    classIds: [1, 2, 3, 4, 6],
    grade: 5,
    parentIds: [16, 17],
    avatar: null
  },
  {
    id: 10,
    name: 'Michael Johnson',
    email: 'michael.johnson@student.school.edu',
    role: 'student',
    classIds: [5],
    grade: 4,
    parentIds: [18],
    avatar: null
  },
  {
    id: 11,
    name: 'Ava Wilson',
    email: 'ava.wilson@student.school.edu',
    role: 'student',
    classIds: [1, 2, 3, 4, 6],
    grade: 5,
    parentIds: [19, 20],
    avatar: null
  },
  {
    id: 12,
    name: 'Liam Brown',
    email: 'liam.brown@student.school.edu',
    role: 'student',
    classIds: [1, 2, 3, 6],
    grade: 5,
    parentIds: [21],
    avatar: null
  },
  // Parents
  {
    id: 13,
    name: 'David Thompson',
    email: 'david.thompson@parent.school.edu',
    role: 'parent',
    childrenIds: [7],
    avatar: null
  },
  {
    id: 14,
    name: 'Lisa Thompson',
    email: 'lisa.thompson@parent.school.edu',
    role: 'parent',
    childrenIds: [7],
    avatar: null
  },
  {
    id: 15,
    name: 'Carlos Martinez',
    email: 'carlos.martinez@parent.school.edu',
    role: 'parent',
    childrenIds: [8],
    avatar: null
  },
  {
    id: 16,
    name: 'Mei Chen',
    email: 'mei.chen@parent.school.edu',
    role: 'parent',
    childrenIds: [9],
    avatar: null
  },
  {
    id: 17,
    name: 'Wei Chen',
    email: 'wei.chen@parent.school.edu',
    role: 'parent',
    childrenIds: [9],
    avatar: null
  },
  {
    id: 18,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@parent.school.edu',
    role: 'parent',
    childrenIds: [10],
    avatar: null
  },
  {
    id: 19,
    name: 'Robert Wilson',
    email: 'robert.wilson@parent.school.edu',
    role: 'parent',
    childrenIds: [11],
    avatar: null
  },
  {
    id: 20,
    name: 'Amanda Wilson',
    email: 'amanda.wilson@parent.school.edu',
    role: 'parent',
    childrenIds: [11],
    avatar: null
  },
  {
    id: 21,
    name: 'Jennifer Brown',
    email: 'jennifer.brown@parent.school.edu',
    role: 'parent',
    childrenIds: [12],
    avatar: null
  }
];

// Helper functions to get related data
export const getSupplyById = (id) => supplyItems.find(item => item.id === id);

export const getClassById = (id) => classes.find(cls => cls.id === id);

export const getUserById = (id) => users.find(user => user.id === id);

export const getClassesByIds = (ids) => classes.filter(cls => ids.includes(cls.id));

export const getSuppliesByIds = (ids) => supplyItems.filter(item => ids.includes(item.id));

export const getUserClasses = (user) => {
  if (user.role === 'teacher') {
    return getClassesByIds(user.classIds);
  } else if (user.role === 'student') {
    return getClassesByIds(user.classIds);
  } else if (user.role === 'parent') {
    const children = users.filter(u => user.childrenIds.includes(u.id));
    const allClassIds = [...new Set(children.flatMap(child => child.classIds))];
    return getClassesByIds(allClassIds);
  }
  return [];
};

export const getAllSuppliesForUser = (user) => {
  const userClasses = getUserClasses(user);
  const allSupplyIds = [...new Set(userClasses.flatMap(cls => cls.requiredSupplies))];
  return getSuppliesByIds(allSupplyIds);
};
