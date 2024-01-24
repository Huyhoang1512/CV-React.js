// src/components/Skills.js
import React from 'react';

const skillsData = [
  { skill: 'React.js', rating: '⭐️⭐️⭐️⭐️⭐️' },
  { skill: 'JavaScript (ES6+)', rating: '⭐️⭐️⭐️⭐️⭐️' },
  { skill: 'HTML5, CSS3', rating: '⭐️⭐️⭐️⭐️⭐️' },
  { skill: 'Bootstrap', rating: '⭐️⭐️⭐️⭐️⭐️' },
  { skill: 'C#', rating: '⭐️⭐️⭐️⭐️' },
  { skill: 'Tiếng Anh IELTS', rating: '⭐️⭐️⭐️⭐️' },
  { skill: 'Làm việc nhóm', rating: '⭐️⭐️⭐️⭐️⭐️' },
  { skill: 'Quản lý, tổ chức dự án', rating: '⭐️⭐️⭐️⭐️' },
  { skill: 'Học hỏi, giải quyết vấn đề', rating: '⭐️⭐️⭐️⭐️⭐️' },
  { skill: 'Node.js', rating: '⭐️⭐️⭐️⭐️' },
  { skill: 'Express.js', rating: '⭐️⭐️⭐️⭐️' },
  { skill: 'Git', rating: '⭐️⭐️⭐️⭐️⭐️' },
  { skill: 'RESTful APIs', rating: '⭐️⭐️⭐️⭐️' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div>
      <h2>Kỹ năng</h2>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Kỹ năng</th>
            <th>Đánh giá</th>
          </tr>
        </thead>
        <tbody>
          {skillsData.map((skillData, index) => (
            <tr key={index}>
              <td>{skillData.skill}</td>
              <td>{skillData.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
