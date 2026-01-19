import PageLayout from '@/Components/NavigationUI/PageLayout';
import Notes from '@/Components/PageComponents/Notes/Notes';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Header from '@/Components/Shared/Header/Header';

const NamingConventions = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Structure/NamingConventions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Basics - Naming Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingConventions;