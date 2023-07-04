import ResumeFile from '../../assets/Resume-Raihan-Jami-Khan-Full-Stack-developer.pdf';

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.download = 'resume.pdf';
    link.click();
  };

  export default handleDownload;