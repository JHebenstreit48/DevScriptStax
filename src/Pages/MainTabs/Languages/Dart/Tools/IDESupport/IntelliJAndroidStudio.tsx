import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntelliJAndroidStudio = () => {
  const markdownFilePath = 'Languages/Dart/Tools/IDESupport/IntelliJAndroidStudio';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IntelliJ/Android Studio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntelliJAndroidStudio;
