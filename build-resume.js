const PDFDocument = require('pdfkit');
const fs = require('fs');

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Nitesh_Nemalpuri_Resume.pdf'));

// Header
doc.fontSize(24).font('Helvetica-Bold').text('Nitesh Nemalpuri', { align: 'center' });
doc.fontSize(12).font('Helvetica').text('Computer Science & Engineering Student | Creative Developer', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(10).fillColor('#666666').text('Email: niteshnemalpuri17@gmail.com | Phone: +91 93 4808 5529 | LinkedIn: linkedin.com/in/niteshnemalpuri', { align: 'center' });
doc.moveDown(2);

function addSection(title, contentArray) {
  doc.fontSize(14).font('Helvetica-Bold').fillColor('#e11d48').text(title.toUpperCase());
  doc.moveDown(0.25);
  
  // Section divider line
  doc.moveTo(50, doc.y)
     .lineTo(550, doc.y)
     .strokeColor('#cccccc')
     .stroke();
  doc.moveDown(0.5);

  doc.fontSize(10).font('Helvetica').fillColor('#000000');
  contentArray.forEach(item => {
    if (item.title) {
      doc.font('Helvetica-Bold').text(item.title, { continued: true });
      doc.font('Helvetica').text(' | ' + item.subtitle);
      if (item.desc) {
        doc.moveDown(0.2);
        doc.fillColor('#444444').text(item.desc, { width: 500, align: 'justify' });
        doc.fillColor('#000000');
      }
      doc.moveDown(0.5);
    } else {
      doc.text(item, { width: 500, align: 'justify' });
      doc.moveDown(0.2);
    }
  });
  doc.moveDown(1);
}

addSection('About Me', [
  'Dynamic Computer Science and Engineering student at GIET University with a passion for Data Science, Machine Learning, and Full-Stack Development. I specialize in creating impactful applications that seamlessly integrate intelligent algorithms with robust web architectures.',
  'Eager to embrace a full-time role that presents professional challenges and leverages strong interpersonal skills, effective time management, and problem-solving expertise.'
]);

addSection('Education', [
  { title: 'Bachelor of Technology: Computer Science', subtitle: 'GIET University - Gunupur (Expected: Jan 2028)' },
  { title: 'Intermediate: Science', subtitle: 'Gandhi Public School - Gunupur (Completed: April 2024)' }
]);

addSection('Experience', [
  { title: 'Member Technical', subtitle: 'Innotech Club GIETU, Gunupur (Feb 2026 - Present)' }
]);

addSection('Technical Toolkit', [
  '- Languages: Python (Advanced), JavaScript, HTML5/CSS3',
  '- AI & Data Science: OpenCV, NumPy, Pytesseract, Data Analytics',
  '- Backend & DB: Flask, SQLite, Flask-IO, ReportLab',
  '- Leadership: Team Management, Project Lifecycle, Agile'
]);

addSection('Featured Projects', [
  { 
    title: 'AgriUstaad', 
    subtitle: 'The Digital Backbone of Indian Agriculture (HackNovation 2.0)',
    desc: 'Engineered an Offline-First Decision Engine using Gemini 1.5 Flash turning a smartphone into an expert agronomist.'
  },
  { 
    title: 'VisionVault', 
    subtitle: 'AI Student Attendance & Performance (Release 2.0)',
    desc: 'Comprehensive academic management portal focusing on predictive analytics and facial recognition using Flask, Scikit-Learn, and OpenCV.'
  },
  { 
    title: 'Intelligent RAG Document QA System', 
    subtitle: 'Generative AI & NLP',
    desc: 'Zero-hallucination RAG system for accurate, context-aware conversations with private documents using LangChain, FAISS, and OpenAI GPT-4.'
  },
  { 
    title: 'TrueFrame', 
    subtitle: 'AI Video Authenticity Detector (HackNovation 1.0)',
    desc: 'Deepfake detection enterprise solution built with PyTorch, Hugging Face, OpenCV, and Streamlit.'
  },
  { 
    title: 'GIETU Nexus', 
    subtitle: 'AI Semantic Search (GDG TechSprint)',
    desc: 'Transforms static institutional archives into an interactive knowledge base by using OCR and Gemini LLM.'
  },
  { 
    title: 'Attendance Analysis', 
    subtitle: 'Data Science (Lead Developer)',
    desc: 'Predictive analytics early warning system using Pandas, NumPy, and Scikit-Learn.'
  }
]);

addSection('Achievements', [
  '- 1st Place (Gold) - GDG TechSprint Hackathon',
  '- 5th Place - Hackanovation 1.0',
  '- Finalist/Participant - Enigma Quizzard (IIT Kharagpur)'
]);

doc.end();
console.log('PDF generated successfully at public/Nitesh_Nemalpuri_Resume.pdf');
