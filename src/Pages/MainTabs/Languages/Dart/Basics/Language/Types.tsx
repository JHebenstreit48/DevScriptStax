import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Types = () => {
  const markdownFilePath = 'Languages/Dart/Basics/Language/Types';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dart Basics - Language Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Types;
