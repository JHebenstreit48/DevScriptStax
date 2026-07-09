import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OOPAndModules = () => {
  const markdownFilePath = 'Languages/Ruby/Basics/Fundamentals/OOPAndModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="OOP & Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OOPAndModules;
