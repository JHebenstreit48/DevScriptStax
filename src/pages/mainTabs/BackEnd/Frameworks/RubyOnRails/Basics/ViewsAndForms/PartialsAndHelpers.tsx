import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PartialsAndHelpers = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms/PartialsAndHelpers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Partials & Helpers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PartialsAndHelpers;
