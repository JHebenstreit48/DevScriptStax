import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OptionsAndDefaults = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Fundamentals/OptionsAndDefaults';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Options & Defaults" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptionsAndDefaults;
