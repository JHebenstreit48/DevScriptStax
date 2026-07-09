import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Setup = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Basics - Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Setup;