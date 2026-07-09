import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypeNarrowingAndTypedDict = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Typing/TypeNarrowingAndTypedDict';

  return (
    <>
      <PageLayout>
        <PageTitle title="Type Narrowing & TypedDict" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeNarrowingAndTypedDict;
