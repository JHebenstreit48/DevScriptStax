import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CLIAndScripts = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Workflow/CLIAndScripts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CLI & Scripts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIAndScripts;
