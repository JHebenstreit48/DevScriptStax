import PageLayout from '@/components/navigationUI/pageLayout';
import Notes from '@/components/pageComponents/notes/notes';
import PageTitle from '@/components/pageComponents/pageTitle';

const NamingConventions = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Structure/NamingConventions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Basics - Naming Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingConventions;