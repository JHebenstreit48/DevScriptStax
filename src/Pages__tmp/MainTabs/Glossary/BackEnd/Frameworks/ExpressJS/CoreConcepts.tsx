import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreConcepts = () => {
  const markdownFilePath = 'Glossary/BackEnd/Frameworks/ExpressJS/CoreConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Express.js - Core Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreConcepts;