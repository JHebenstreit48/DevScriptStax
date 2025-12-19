import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutoprefixAndBrowserslist = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/CoreTasks/AutoprefixAndBrowserslist';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Autoprefix & Browserslist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutoprefixAndBrowserslist;
