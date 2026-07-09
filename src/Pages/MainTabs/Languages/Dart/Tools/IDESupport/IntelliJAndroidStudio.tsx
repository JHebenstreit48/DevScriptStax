import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IntelliJAndroidStudio = () => {
  const markdownFilePath = 'Languages/Dart/Tools/IDESupport/IntelliJAndroidStudio';

  return (
    <>
      <PageLayout>
        <PageTitle title="IntelliJ/Android Studio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntelliJAndroidStudio;
