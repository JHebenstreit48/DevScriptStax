import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PartialsAndHelpers = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms/PartialsAndHelpers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Partials & Helpers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PartialsAndHelpers;
