import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DecoratorsAndDescriptors = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Metaprogramming/DecoratorsAndDescriptors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Decorators & Descriptors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DecoratorsAndDescriptors;
