import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Utilities = () => {
  const markdownFilePath = 'FrontEnd/CSS/Frameworks/GettingStarted/BootstrapUtilities';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Frameworks - Bootstrap Utilities - Spacing and Sizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Utilities;