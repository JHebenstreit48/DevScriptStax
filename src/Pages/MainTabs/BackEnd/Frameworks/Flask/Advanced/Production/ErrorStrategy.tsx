import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorStrategy = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Production/ErrorStrategy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorStrategy;
