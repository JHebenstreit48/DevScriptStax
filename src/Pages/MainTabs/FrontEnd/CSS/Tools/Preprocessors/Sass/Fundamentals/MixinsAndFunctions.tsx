import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MixinsAndFunctions = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals/MixinsAndFunctions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mixins & Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MixinsAndFunctions;
