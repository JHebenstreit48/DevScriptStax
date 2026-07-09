import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Controllers = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers/Controllers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Controllers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Controllers;
