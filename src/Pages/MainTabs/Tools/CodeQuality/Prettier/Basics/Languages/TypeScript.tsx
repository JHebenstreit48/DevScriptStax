import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypeScript = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Languages/TypeScript';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TypeScript" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeScript;
