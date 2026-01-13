import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ERBAndLayouts = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms/ERBAndLayouts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ERB & Layouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ERBAndLayouts;
