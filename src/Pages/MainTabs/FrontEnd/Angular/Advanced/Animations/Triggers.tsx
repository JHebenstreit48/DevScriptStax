import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Triggers = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Animations/Triggers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Animations - Triggers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Triggers;