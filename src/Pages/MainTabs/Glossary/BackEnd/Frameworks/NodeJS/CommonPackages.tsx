import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonPackages = () => {
  const markdownFilePath = 'Glossary/BackEnd/Frameworks/NodeJS/CommonPackages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Node.js - Common Packages" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonPackages;