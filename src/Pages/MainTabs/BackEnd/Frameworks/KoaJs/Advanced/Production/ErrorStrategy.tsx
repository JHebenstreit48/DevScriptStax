import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorStrategy = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Production/ErrorStrategy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Error Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorStrategy;
