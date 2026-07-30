import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Middleware = () => {
  const markdownFilePath = 'Glossary/BackEnd/Frameworks/ExpressJS/Middleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Express.js - Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Middleware;