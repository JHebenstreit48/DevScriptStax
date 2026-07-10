import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreConcepts = () => {
  const markdownFilePath = 'Glossary/BackEnd/Frameworks/NodeJS/CoreConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Node.js - Core Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreConcepts;