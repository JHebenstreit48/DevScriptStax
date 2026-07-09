import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
