import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MixinsAndAbstract = () => {
  const markdownFilePath = 'Languages/Dart/Basics/OOP/MixinsAndAbstract';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mixins & Abstract" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MixinsAndAbstract;
