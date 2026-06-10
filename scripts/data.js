export const allCourses = [
    { id: 1, category: 'Marketing', title: 'The Ultimate Google Ads Training Course', price: 100, speaker: 'Jerome Bell', image: 'assets/images/image1.jpg' },

    { id: 2, category: 'Management', title: 'Product Management Fundamentals', price: 480, speaker: 'Marvin McKinney', image: 'assets/images/image2.jpg' },

    { id: 3, category: 'HR & Recruiting', title: 'HR Management and Analytics', price: 200, speaker: 'Leslie Alexander Li', image: 'assets/images/image3.jpg' },

    { id: 4, category: 'Marketing', title: 'Brand Management & PR Communications', price: 530, speaker: 'Kristin Watson', image: 'assets/images/image4.jpg' },

    { id: 5, category: 'Design', title: 'Graphic Design Basic', price: 500, speaker: 'Guy Hawkins', image: 'assets/images/image5.jpg' },

    { id: 6, category: 'Management', title: 'Business Development Management', price: 400, speaker: 'Dianne Russell', image: 'assets/images/image6.jpg' },

    { id: 7, category: 'Development', title: 'Highload Software Architecture', price: 600, speaker: 'Brooklyn Simmons', image: 'assets/images/image7.jpg' },

    { id: 8, category: 'HR & Recruiting', title: 'Human Resources – Selection and Recruitment', price: 150, speaker: 'Kathryn Murphy', image: 'assets/images/image8.jpg' },

    { id: 9, category: 'Design', title: 'User Experience. Human-centered Design', price: 240, speaker: 'Cody Fisher', image: 'assets/images/image9.jpg' },

    { id: 10, category: 'Marketing', title: 'Digital Marketing Strategy', price: 420, speaker: 'Emily Johnson', image: 'assets/images/image1.jpg' },
    { id: 11, category: 'Marketing', title: 'Content Marketing Masterclass', price: 380, speaker: 'Michael Brown', image: 'assets/images/image2.jpg' },

    { id: 12, category: 'Management', title: 'Leadership & Team Management', price: 510, speaker: 'Sarah Williams', image: 'assets/images/image3.jpg' },

    { id: 13, category: 'HR & Recruiting', title: 'Talent Acquisition Specialist', price: 350, speaker: 'David Lee', image: 'assets/images/image4.jpg' },
    { id: 14, category: 'HR & Recruiting', title: 'Corporate Culture Building', price: 290, speaker: 'Anna Martinez', image: 'assets/images/image5.jpg' },
    { id: 15, category: 'HR & Recruiting', title: 'Performance Review Systems', price: 310, speaker: 'James Wilson', image: 'assets/images/image6.jpg' },

    { id: 16, category: 'Development', title: 'React & Next.js Advanced', price: 680, speaker: 'Sophia Chen', image: 'assets/images/image7.jpg' },
    { id: 17, category: 'Development', title: 'Node.js Microservices', price: 590, speaker: 'Daniel Kim', image: 'assets/images/image8.jpg' }
];

export function getCategoryCounts() {
    return {
        'All': 17,
        'Marketing': 4,
        'Management': 3,
        'HR & Recruiting': 5,
        'Design': 2,
        'Development': 3
    };
}

export function getUniqueCategories() {
    return ['All', 'Marketing', 'Management', 'HR & Recruiting', 'Design', 'Development'];
}
