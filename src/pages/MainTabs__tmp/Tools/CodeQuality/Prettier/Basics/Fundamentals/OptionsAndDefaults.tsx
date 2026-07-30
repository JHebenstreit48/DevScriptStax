import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OptionsAndDefaults = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Fundamentals/OptionsAndDefaults';

  return (
    <>
      <PageLayout>
        <PageTitle title="Options & Defaults" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptionsAndDefaults;
